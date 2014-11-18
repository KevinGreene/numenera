(ns numenera.character-test
  (:require [numenera.character :as character]))

(testing "parse-int"
  (testing "with int"
    (is (= (character/parse-int 5) 5))
    )
  (testing "with string"
    (is (= (character/parse-int "5") 5))
    )
  )
