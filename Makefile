.PHONY: build help

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

site:  ## build site dir
	@docker run --rm -v ${PWD}:/docs squidfunk/mkdocs-material build

build: ## build src to site
	@docker build -t nocalhost-docs .

clean: ## remove site directory
	rm -fr site
