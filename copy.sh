rm -rf output_folder/
mkdir output_folder/
mkdir output_folder/result/
docker cp cypress_test_container:/app/cucumber-json ${PWD}/output_folder/result/cucumber-json
docker cp cypress_test_container:/app/cypress/videos ${PWD}/output_folder/videos
docker cp cypress_test_container:/app/cypress/results ${PWD}/output_folder/result
