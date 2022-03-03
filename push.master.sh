###
 # @Author: Tom
 # @Date: 2022-03-02 22:37:11
 # @LastEditors: Please set LastEditors
 # @Description: 提交源代码
### 

set -e
time=$(date "+%Y-%m-%d %H:%M:%S")

git add .
read -p 'Commit:' COMMIT
git commit -m "$time $COMMIT"

git push -f git@github.com:tomMentor/special-column.git master
