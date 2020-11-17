package alpha

import grails.converters.JSON

class AuthController {
    //подключаем сервис
    def authUserService

    def auth() {
        // вызываем метод сервиса serviceMethod и ловим результат в try-catch
        // реультат метода serviceMethod отправляем на фронт
        try {
            response.status = 200;
            // возвращаем ответ запроса на фронт в виде JSON
            render authUserService.isUserAuth(request.XML) as JSON;
        } catch(e) {
            response.status = 401;
            // возвращаем ответ ошибку на фронт в виде JSON
            render([error: e.message] as JSON)
        }
    }
}
