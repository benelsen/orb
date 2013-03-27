
all: orb.js orb.min.js

.PHONY: clean all test

test:
	@npm test

orb.js: $(shell node_modules/.bin/smash --list src/orb.js)
	@rm -f $@
	node_modules/.bin/smash src/orb.js | node_modules/.bin/uglifyjs - --beautify indent-level=2 --output $@
	@chmod a-w $@

orb.min.js: orb.js
	@rm -f $@
	node_modules/.bin/uglifyjs $< --compress --mangle --output $@

# build: components index.js
# 	@component build --dev

# components: component.json
# 	@component install --dev

clean:
	rm -f orb*.js
