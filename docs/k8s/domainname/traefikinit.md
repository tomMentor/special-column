<!--
 * @Author: Tom
 * @Date: 2023-05-09 10:20:55
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
### Traefik 官网
```
https://doc.traefik.io/traefik/user-guides/crd-acme/
```

服务器初始化准备

```bash
cd /

mkdir traefik

touch traefik.res.yaml

touch traefik.svc.yaml

touch traefik.deploy.yaml
```
```bash
.
├─ /            
└─ traefik
   ├─ traefik.ingress.yaml
   ├─ traefik.services.yaml
   └─ traefik.deploy.yaml
```
### traefik.ingress.yaml
下载地址
```bash
https://raw.githubusercontent.com/traefik/traefik/v2.10/docs/content/reference/dynamic-configuration/kubernetes-crd-rbac.yml
```
```bash
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: traefik-ingress-controller

rules:
  - apiGroups:
      - ""
    resources:
      - services
      - endpoints
      - secrets
    verbs:
      - get
      - list
      - watch
  - apiGroups:
      - extensions
      - networking.k8s.io
    resources:
      - ingresses
      - ingressclasses
    verbs:
      - get
      - list
      - watch
  - apiGroups:
      - extensions
      - networking.k8s.io
    resources:
      - ingresses/status
    verbs:
      - update
  - apiGroups:
      - traefik.io
      - traefik.containo.us
    resources:
      - middlewares
      - middlewaretcps
      - ingressroutes
      - traefikservices
      - ingressroutetcps
      - ingressrouteudps
      - tlsoptions
      - tlsstores
      - serverstransports
    verbs:
      - get
      - list
      - watch

---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: traefik-ingress-controller

roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: traefik-ingress-controller
subjects:
  - kind: ServiceAccount
    name: traefik-ingress-controller
    namespace: default
```
### traefik.services.yaml
下载地址
```bash
https://raw.githubusercontent.com/traefik/traefik/v2.10/docs/content/user-guides/crd-acme/02-services.yml
```

```bash
apiVersion: v1
kind: Service
metadata:
  name: traefik
type: NodePort
spec:
  ports:
    - protocol: TCP
      name: web
      port: 8000
    - protocol: TCP
      name: admin
      port: 8080
    - protocol: TCP
      name: websecure
      port: 4443
  selector:
    app: traefik

---
apiVersion: v1
kind: Service
metadata:
  name: whoami

spec:
  ports:
    - protocol: TCP
      name: web
      port: 80
  selector:
    app: whoami
```
### deployments.yaml

下载地址
```bash
https://raw.githubusercontent.com/traefik/traefik/v2.10/docs/content/user-guides/crd-acme/03-deployments.yml
```
```bash
apiVersion: v1
kind: ServiceAccount
metadata:
  namespace: default
  name: traefik-ingress-controller

---
kind: Deployment
apiVersion: apps/v1
metadata:
  namespace: default
  name: traefik
  labels:
    app: traefik

spec:
  replicas: 1
  selector:
    matchLabels:
      app: traefik
  template:
    metadata:
      labels:
        app: traefik
    spec:
      serviceAccountName: traefik-ingress-controller
      containers:
        - name: traefik
          image: traefik:v2.10
          args:
            - --api.insecure
            - --accesslog
            - --entrypoints.web.Address=:8000
            - --entrypoints.websecure.Address=:4443
            - --providers.kubernetescrd
            - --certificatesresolvers.myresolver.acme.tlschallenge
            - --certificatesresolvers.myresolver.acme.email=foo@you.com
            - --certificatesresolvers.myresolver.acme.storage=acme.json
            # Please note that this is the staging Let's Encrypt server.
            # Once you get things working, you should remove that whole line altogether.
            - --certificatesresolvers.myresolver.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory
          ports:
            - name: web
              containerPort: 8000
            - name: websecure
              containerPort: 4443
            - name: admin
              containerPort: 8080

---
kind: Deployment
apiVersion: apps/v1
metadata:
  namespace: default
  name: whoami
  labels:
    app: whoami

spec:
  replicas: 2
  selector:
    matchLabels:
      app: whoami
  template:
    metadata:
      labels:
        app: whoami
    spec:
      containers:
        - name: whoami
          image: traefik/whoami
          ports:
            - name: web
              containerPort: 80
```
执行文件
```bash
kubectl apply -f traefik.ingress.yaml
kubectl apply -f traefik.services.yaml
kubectl apply -f traefik.deployments.yaml
```
