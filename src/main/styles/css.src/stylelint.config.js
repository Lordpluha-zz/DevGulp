module.exports = {
	"extends": "stylelint-config-standard",
	"overrides": [{
    	"files": ["**/*.css"],
    	"customSyntax": "postcss-sass",
    	"rules": {
    		"indentation": "tab",
    		"alpha-value-notation": null,
    		"at-rule-empty-line-before": null,
    		"no-missing-end-of-source-newline": null
		}
	}],
}