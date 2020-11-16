package alpha

import grails.gorm.transactions.Transactional

@Transactional
class AuthUserService {
    // создаем Map имитацию данных для логина и пароля
    private static final Map User_Auth = [login: 'Leon', password: '1213'];

    Map serviceMethod(def credentions) {
        // принимаем лоигн и пароль который пришел с контроллера
        String login = credentions.login
        String password = credentions.password

        // Если логин и пароль не совпадают то возвращаем сообщение об ошибке
        Boolean isAuthUser = checkAuth(login, password)
        if (!isAuthUser) throw new Exception('User not found')
        return [success: 'done']
    }
    // Проверям совпадают ли логин и пароль
    private Boolean checkAuth(String l, String p) {
        if ( l == User_Auth.login && p == User_Auth.password) {
            return true
        }
        return false;
    }
}
