(ns numenera.character-test
  (:require [clojure.test :refer :all]
            [numenera.character :as character]))

(deftest parse-int-test
  (testing "with int"
    (is (= (character/parse-int 5) 5))
    )
  (testing "with string"
    (is (= (character/parse-int "5") 5))
    )
  )
