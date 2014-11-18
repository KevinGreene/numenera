(ns numenera.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [cljs-http.client :as http]
            [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(def characterList (atom []))

(def characterName (atom "Gregory"))

(defn getArticle
  [noun]
  (str "a"
       (if
         (contains?  #{\A\E\I\O\U} (first (clojure.string/capitalize noun)))
         "n"
         "")))

(defn getCharacterString
  [characterName {:keys [descriptor character-type focus]}]
  (str
   characterName ", "
   (getArticle descriptor) " "
   descriptor " "
   character-type " who "
   focus))

(defn refresh-character-component
  []
  [:div
   "Refresh characters: "
   [:input {:type "button" :value "Click me!"
            :on-click #(fetch-characters)}]])

(defn character-name-input-component
  []
  [:div
   "Type your desired name: "
   [:input {:type "text" :value @characterName
            :on-change #(reset! characterName  (-> % .-target .-value))}]])

(defn character-component
  [characterName character]
  [:li (getCharacterString characterName character)])

(defn character-list
  [characterName characters]
  [:div
   [:ul
    (for [character characters]
      (character-component characterName  character))]])

(defn fetch-characters
  []
  (let [c (chan)]
    (go (let [{characters :body} (<! (http/get "/api/characters/random/5"))]
          (reset! characterList characters)))))

(defn character-box
  []
  [:div
   [:h1 "Characters"]
   [refresh-character-component]
   [character-name-input-component]
   [character-list @characterName @characterList]])

(reagent/render-component [character-box]
                          (.getElementById  js/document "character-box"))
(fetch-characters)
