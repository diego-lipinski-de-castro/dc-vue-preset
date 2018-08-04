import Routes from 'vue-routisan'

Routes.setViewResolver(path => {
    path = path.replace(/\./g, '/')
    return import(`./../${path}`)
})

export default Routes.all()
