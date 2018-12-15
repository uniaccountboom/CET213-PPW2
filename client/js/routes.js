routes = [
    {
      path: '/',
      url: './index.html',
    },
    {
      path: '/albums/',
      componentUrl: './pages/albums.html',
    },
    {
    path: '/detail/:id/',
    componentUrl: './pages/detail.html',
    },
    {
    path: '/addreview/',
    componentUrl: './pages/addreview.html',
    },
    {
    path: '/viewreview/',
    componentUrl: './pages/viewreview.html',
    },
    {
      path: '/viewselling/',
      componentUrl: './pages/viewselling.html',
      },
    {
        path: '/addselling/',
        componentUrl: './pages/addselling.html',
        },
    {
      path: '(.*)',
      url: './pages/404.html',
    },
  ];
  