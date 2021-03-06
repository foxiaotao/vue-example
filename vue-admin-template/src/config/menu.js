const menuConfig = [{
    name: 'home',
    title: '首页',
    route: '/home',
    icon: 'el-icon-location',
    hidden: false
  },

  {
    name: 'vue',
    title: 'vue学习',
    route: '/vue',
    icon: 'el-icon-location',
    hidden: false,
    children: [{
      name: 'slot',
      title: '插槽',
      route: '/vue/slot',
      icon: '',
    }]
  },

  {
    name: 'provision',
    title: '资源分配',
    route: '/provision',
    icon: 'el-icon-location',
    hidden: false,
    children: [{
      name: 'host',
      title: '主机',
      route: '/provision/host',
      icon: '',
      disabled: true
    }, {
      name: 'volume',
      title: '卷',
      route: '/provision/volume',
      icon: '',
      hidden: false
    }]
  },

  {
    name: 'protected',
    title: '数据保护',
    route: '/protected',
    icon: 'el-icon-location',
    children: [{
      name: 'replication-pair',
      title: '远程复制 Pair',
      route: '/protected/replication-pair',
      icon: '',
    }, {
      name: 'consistent-group',
      title: '远程复制一致性组',
      route: '/provision/consistent-group',
      icon: '',
    }, {
      name: 'duplication-pair',
      title: '双活 Pair',
      route: '/provision/duplication-pair',
      icon: '',
    }, {
      name: 'duplication-group',
      title: '双活一致性组',
      route: '/provision/duplication-group',
      icon: '',
      hidden: true
    }]
  },

  {
    name: 'setting',
    title: '设置',
    route: '/setting',
    icon: '',
    disabled: true
  }
]

function MenuFactory(config) {
  return config;
}

export default new MenuFactory(menuConfig);
