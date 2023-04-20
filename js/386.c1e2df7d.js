(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{1014:function(n,e){n.exports='\x3c!--\ntitle: GithubAction\nsort:\n--\x3e\n\n> 基础语法\n>\n> `.github/workflows/xx.yml`\n\n```yml\nname: Action_name\n\non :\n  push:\n    # 指定分支\n    branches:\n      - master\n    # 指定路径\n    paths:\n      - *\n\n# 环境变量\nenv:\n  GIT_USER: fzf404\n  GIT_EMAIL: me@fzf404.art\n\n# 工作\njobs:\n  # job_name\n  job1_name:\n    runs-on:ubuntu-latest\n    steps:\n      - name: Checkout source\n        uses:actions/checkout@v2\n\n      - name: Use Node.js ${{ matrix.node_version }}\n        uses: actions/setup-node@v1\n        with:\n          version:  ${{ matrix.node_version }}\n\n      - name: Setup nodejs\n        run: |\n          date\n          npm install\n\n      - name: Do job\n      - run: |\n      \tnpm version\n        npm run build\n        npm run test\n```\n\n## Rdoc-Note\n\n```yml\nname: NOTE_DEPLOY\n\non:\n  push:\n    branches:\n      - master\n\nenv:\n  GIT_USER: fzf404\n  GIT_EMAIL: me@fzf404.art\n\njobs:\n  build:\n    runs-on: Ubuntu-20.04\n\n    steps:\n      - name: Checkout source\n        uses: actions/checkout@v2\n\n      - name: Use Node.js ${{ matrix.node_version }}\n        uses: actions/setup-node@v1\n        with:\n          node-version: ${{ matrix.node_version }}\n\n      - name: Setup rdoc\n        env:\n          ACTION_DEPLOY_KEY: ${{ secrets.NOTE_DEPLOY_PRI }}\n\n        run: |\n          mkdir -p ~/.ssh/\n          echo "$ACTION_DEPLOY_KEY" > ~/.ssh/id_rsa\n          chmod 600 ~/.ssh/id_rsa\n          ssh-keyscan github.com >> ~/.ssh/known_hosts\n          git config --global user.email $GIT_USER\n          git config --global user.name $GIT_EMAIL\n          npm install\n\n      - name: Note Theme\n        run: |\n          git clone https://github.com/fzf404/rdoc-theme-fzf.git\n          rm -rf node_modules/rdoc/theme/default/*\n          mv rdoc-theme-fzf/* node_modules/rdoc/theme/default/\n\n      - name: Note build\n        run: |\n          npm run build\n\n      - name: Note deploy\n        run: |\n          npm run deploy\n```\n\n## Hexo\n\n```bash\n# 生成ssh密钥\nssh-keygen -f github-deploy-key\n# 将公私钥分别复制到静态界面仓库-配置仓库\nrepository->setting->Secrets\nrepository->setting->Deploy keys\n\n# 创建Action配置文件\nblog (repository)\n└── .github\n    └── workflows\n        └── deploy.yml\n```\n\n> `deploy.yml`\n\n```yml\nname: HEXO_DEPLOY\n\non:\n  push:\n    branches:\n      - master\n\nenv:\n  GIT_USER: fzf404\n  GIT_EMAIL: me@fzf404.art\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout source\n        uses: actions/checkout@v2\n\n      - name: Use Node.js ${{ matrix.node_version }}\n        uses: actions/setup-node@v1\n        with:\n          version: ${{ matrix.node_version }}\n\n      - name: Setup hexo\n        env:\n          ACTION_DEPLOY_KEY: ${{ secrets.HEXO_DEPLOY_PRI }}\n\n        run: |\n          mkdir -p ~/.ssh/\n          echo "$ACTION_DEPLOY_KEY" > ~/.ssh/id_rsa\n          chmod 600 ~/.ssh/id_rsa\n          ssh-keyscan github.com >> ~/.ssh/known_hosts\n          git config --global user.email $GIT_USER\n          git config --global user.name $GIT_EMAIL\n          npm install hexo-cli -g\n      - name: Hexo deploy\n        run: |\n          hexo clean\n          hexo d\n```\n\n> 拷贝 hexo 配置\n\n```\nthemes\n_config.yml\npackage.json\n```\n\n> 上传 github\n\n```yml\ngit remote add origin git@github.com:xx/xx.git\ngit branch -M master\ngit push -u origin master\n```\n'}}]);