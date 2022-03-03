###
 # @Author: Tom
 # @Date: 2022-03-02 22:37:11
 # @LastEditors: Please set LastEditors
 # @Description: 提交源代码
### 

set -e
time=$(date "+%Y-%m-%d %H:%M:%S")

sudo -E git add .
read -p 'Commit:' COMMIT
sudo -E git commit -m "$time $COMMIT"

sudo -E git push -f git@github.com:tomMentor/special-column.git
