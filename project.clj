(defproject om-rte "0.1.0-SNAPSHOT"
  :description "A rich text editor written for Om"
  :url "http://github.com/nhusher/om-rte"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [com.facebook/react "0.9.0"]
                 [om "0.5.0"]
                 [hickory "0.5.3"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id           "om-rte-dev"
              :source-paths ["src"]
              :compiler {
                :output-to     "om_rte.js"
                :output-dir    "out"
                :optimizations :none
                :source-map    true }}

             {:id           "om-rte-min"
              :source-paths ["src"]
              :compiler {
                :output-to     "om_rte.min.js"
                :optimizations :advanced
                :pretty-print  false
                :source-map    "om_rte.min.map.js"
                :preamble      ["react/react.min.js"]
                :externs       ["react/externs/react.js"] }}]})
