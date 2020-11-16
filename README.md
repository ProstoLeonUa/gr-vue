## Создание grails + vue

Редактируем build.gradle файл (your-project/build.gradle)

## Добавляем плагин node-plugin 
Плагин - https://github.com/node-gradle/gradle-node-plugin/blob/master/docs/installation.md
```
buildscript {
    dependencies {
        classpath "com.github.node-gradle:gradle-node-plugin:2.2.4"
    }
}
...
apply plugin: 'com.github.node-gradle.node'
```
##Настраиваем плагин

Указываем версию node, а так же  директиву где лежат зависимости и рабочую директиву для Node
#### Подробные пример настроек (angular) - http://guides.grails.org/angular2-combined/guide/index.html
```
node {
    version = '14.15.0'
    download = true
    nodeModulesDir = file("${System.getProperty("user.dir")}/src/main/client")
    workDir = file("${project.buildDir}/nodejs")
}
```
Создаем задачу для сборки client приложения
```

task buildClient(type: NpmTask, dependsOn: 'npmInstall') {
    group = 'build'
    description = 'Compile client side assets for production'
    args = ['run', 'build']
}
```
Создаем задачу для пересборки client приложения
```
task copyClientResources(dependsOn: buildClient) {
    group = 'build'
    description = 'Copy client resources into server'
    doLast {
        copy {
            from "${System.getProperty("user.dir")}/src/main/client/dist/"
            into "${System.getProperty("user.dir")}/src/main/webapp/"
        }
    }
}
```
Запуск зависимостей
```
war.dependsOn(buildClient)
bootRun.dependsOn(buildClient)
```
Очистка директории перед началом сборки
```
clean {
    delete fileTree(dir: "src/main/webapp")
}
```
Подробная информация и другие настройки - http://guides.grails.org/angular2-combined/guide/index.html
##Изменение конфигурации

Заливаем клиентское приложение в root>src>main>client
В файле vue.config.js пишем:
```
module.exports = {
	outputDir: "../webapp"
}
```
Отключаем CORS (grails-app / conf / application.yml)
```
grails:
    cors:
        enabled: false
```
Убираем статический index.html
```
grails:
    resources:
        pattern: /**
```
Настраиваем перенаправлеие в файле  (grails-app / сontrollers / UrlMappings.groovy)
```
"/"(uri: "/index.html")
```
