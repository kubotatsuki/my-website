module.exports = {
  apps : [{
    script: 'pnpm start',
  }],

  deploy : {
    production : {
      user : 'lighthouse',
      host : '1.14.68.70',
      ref  : 'origin/main',
      repo : 'git@github.com:kubotatsuki/my-website.git',
      path : 'home/lighthouse',
      'pre-deploy-local': '',
      'post-deploy' : 'pnpm install && pnpm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
