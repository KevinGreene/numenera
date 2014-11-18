(ns numenera.server
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.adapter.jetty :as ring]
            [compojure.handler :as handler]
            [ring.util.response :refer [resource-response response]]
            [ring.middleware.json :as middleware]
            [numenera.character :as character]))

(defroutes app-routes
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (GET "/api/characters/random" []
       (response (character/createRandomCharacter)))
  (GET "/api/characters/random/:number" [number]
       (response (character/createCharacters number)))
  (route/resources "/")
  (route/not-found "<h1>Page not found</h1>")
  )

(def app
  (-> (handler/api app-routes)
      (middleware/wrap-json-body)
      (middleware/wrap-json-response)))


(defn -main []
  (ring/run-jetty #'app {:port 3000 :join? false}))
