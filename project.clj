(defproject numenera-clj "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.2.1"]
                 [ring/ring-json "0.1.2"]
                 [ring/ring-jetty-adapter "1.2.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [cljs-http "0.1.2" :exclusions [org.clojure/clojure]]
                 [om "0.3.6"]
                 [reagent "0.4.3"]]
  :preamble ["reagent/react.js"]
  :plugins [[lein-cljsbuild "1.0.1"]
            [lein-ring "0.8.7"]
            [lein-pdo "0.1.1"]
            [lein-less "1.7.2"]]
  :aliases {"up" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]}
  :source-paths ["src/clj"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/app.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}]}
  :resource-paths ["resources"]
  :test-paths ["test"]
  :less {:source-paths ["src/less"]
         :target-path "resources/public/css"}
  :main numenera.server)
