
build: index.js orb.js orb.min.js

.PHONY: build test jshint complex

test: index.js
	@npm test

jshint: index.js
	node_modules/.bin/jshint index.js

index.js:
	@rm -f $@
	cat \
		src/start.js \
		\
		src/constants/index.js \
		src/constants/common.js \
		src/constants/time.js \
		src/constants/earth.js \
		\
		src/common/index.js \
		src/common/angular.js \
		\
		src/vector/index.js \
		src/vector/matrixMultiplication.js \
		src/vector/rotationMatrix.js \
		src/vector/mirrorMatrix.js \
		\
		src/time/index.js \
		src/time/conversions.js \
		src/time/leapSeconds.js \
		\
		src/transformations/index.js \
		src/transformations/spherical.js \
		src/transformations/ellipsoidal.js \
		src/transformations/geodetic.js \
		src/transformations/orbitalPlaneToInertial.js \
		src/transformations/inertialToFixed.js \
		src/transformations/fixedToTopocentric.js \
		src/transformations/topocentricToHorizontal.js \
		\
		src/position/index.js \
		src/position/keplerEquation.js \
		src/position/direct.js \
		\
		src/end.js \
	| node_modules/.bin/uglifyjs \
		--beautify indent-level=2 \
		--comments all \
		--output $@

orb.js: index.js
	@rm -f $@
	node_modules/.bin/browserify index.js --standalone orb -o orb.js

orb.min.js: orb.js
	@rm -f $@ $@.map
	node_modules/.bin/uglifyjs $< --compress unused=false --mangle --output $@ --source-map $@.map

complex:
	node_modules/.bin/cr orb.js
