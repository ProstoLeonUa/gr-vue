package alpha

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }

        }
        "/"(uri: "/index.html")

    }

}
