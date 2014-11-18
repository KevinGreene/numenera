(ns numenera.character
  (:require [clojure.string :as str])
  (:require [clojure.java.io :as io])
  )

(defrecord NumeneraCharacter
  [type
   focus
   descriptor
   ])

(defn selectRandom [x]
  (nth x
       (rand-int (count x))))

(defn loadFile [x]
  (map str/trim
       (str/split
        (slurp x) #"\n")))

(defn loadFileFromString
  [location]
  (loadFile
   (.getPath (io/resource location))))

(defn parse-int [s]
  (if (instance? String s)
  (Integer/parseInt s )
    s))

(def descriptorList
  (loadFileFromString "descriptors.txt"))

(def locationDescriptorList
  (loadFileFromString "location-descriptors.txt"))

(def fociList
  (loadFileFromString "foci.txt"))

(def typeList
  ["Jack" "Nano" "Glaive"])

(defn createRandomCharacter []
  (->NumeneraCharacter
   (selectRandom typeList)
   (selectRandom fociList)
   (selectRandom (into descriptorList locationDescriptorList))
   )
  )

(defn createCharacters [x]
  (let [limit (parse-int x)]
    (vec (take limit (repeatedly createRandomCharacter)))))

(defn -main
  "I don't do a whole lot."
  []
  (println (createCharacters 5))
  )
