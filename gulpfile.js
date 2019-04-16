/**
 * Must use v4+ of gulp
 */

const gulp = require('gulp')
const path = require('path')
const del = require('del')
const ts = require('gulp-typescript')
//const merge2 = require('merge2')
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

//const servicesRootDir = './services/'

gulp.task('clean', () => {

    // const servicePaths = getServicePaths()
    // const distPaths = []

    // servicePaths.forEach(servicePath => {
    //     distPaths.push(path.join(servicePath, 'dist'))
    // })

    return del(['dist'])
})

gulp.task('allTsToJs', () => {

    return tsToJs('.')

    // const servicePaths = getServicePaths()
    // const returnStreams = []

    // servicePaths.forEach(servicePath => {

    //     returnStreams.push(tsToJs(servicePath))

    // })

    // // this ensures all streams finish before this task is marked as complete
    // //  otherwise gulp will think it's done when it's not and start other tasks
    // //  that might depend on this one
    // return merge2(returnStreams)

})

gulp.task('watch', () => {

    // const servicePaths = getServicePaths()

    // servicePaths.forEach(servicePath => {
    //     gulp.watch(path.join(servicePath, 'src/**/*.ts'), () => {return tsToJs(servicePath)})
    // })

})

gulp.task('default', gulp.series('clean', 'allTsToJs', 'watch'))

// shared functions
function tsToJs(servicePath) {

    console.log('### tsToJs: ' + servicePath)

    const distPath = path.join(servicePath, 'dist')
    const tsProject = ts.createProject(path.join(servicePath, 'tsconfig.json'))

    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(distPath))

}

function getServicePaths() {

    const isDirectory = servicesRootDir => lstatSync(servicesRootDir).isDirectory()

    const servicePaths = readdirSync(servicesRootDir).map(name => join(servicesRootDir, name)).filter(isDirectory)

    return servicePaths

}
