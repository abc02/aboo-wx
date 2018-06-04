WEB_PATH_SERVER='/home/page/aboo-wx/server'
WEB_PATH_CLIENT='/home/page/aboo-xx/client'
WEB_PATH='/home/page/aboo-xx'
WEB_USER='root'
WEB_USERGROUP='root'
# we can do 

echo "项目开始部署"
cd $WEB_PATH
# git reset --hard origin/release
# git clean -f
# 把项目拉取到最新
echo "项目拉取到最新..." 
git pull
echo "项目切换至主分支..." 
git checkout master

cd $WEB_PATH_SERVER
# 安装项目依赖
echo "服务端安装依赖..."
npm install
# 把vue项目编译
echo "服务端启动..."
npm run prd
echo "服务端启动完成."

echo "项目开始部署"
# 切换到client里面
cd $WEB_PATH_CLIENT
# 项目编译
echo "项目编译中..."
npm install
npm run build
chown -R $WEB_USER:$WEB_USERGROUP $WEB_PATH
echo "项目编辑完成."