module.exports = {
  name: 'static',
  default: ["nginx"],
  masonJson: {
    nginx: {
      name: 'web', 
      build: '.',
      base: 'nginx:alpine',
      type: 'service',
      volumes: {
        './public':'/usr/share/nginx/html'
      },
      ports: ["80:80"],
    }
  },
}