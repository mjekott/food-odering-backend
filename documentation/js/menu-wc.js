'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">food-odering-backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-ed8e0171fc9e24e95f84ca9db94c4851c646119d3a166e87d4a7925a3a61dcee00266b086866e90693a9e7370b66f64ddf33ffc5f851b5326a51dd84f836a25c"' : 'data-target="#xs-controllers-links-module-AppModule-ed8e0171fc9e24e95f84ca9db94c4851c646119d3a166e87d4a7925a3a61dcee00266b086866e90693a9e7370b66f64ddf33ffc5f851b5326a51dd84f836a25c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ed8e0171fc9e24e95f84ca9db94c4851c646119d3a166e87d4a7925a3a61dcee00266b086866e90693a9e7370b66f64ddf33ffc5f851b5326a51dd84f836a25c"' :
                                            'id="xs-controllers-links-module-AppModule-ed8e0171fc9e24e95f84ca9db94c4851c646119d3a166e87d4a7925a3a61dcee00266b086866e90693a9e7370b66f64ddf33ffc5f851b5326a51dd84f836a25c"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-ed8e0171fc9e24e95f84ca9db94c4851c646119d3a166e87d4a7925a3a61dcee00266b086866e90693a9e7370b66f64ddf33ffc5f851b5326a51dd84f836a25c"' : 'data-target="#xs-injectables-links-module-AppModule-ed8e0171fc9e24e95f84ca9db94c4851c646119d3a166e87d4a7925a3a61dcee00266b086866e90693a9e7370b66f64ddf33ffc5f851b5326a51dd84f836a25c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ed8e0171fc9e24e95f84ca9db94c4851c646119d3a166e87d4a7925a3a61dcee00266b086866e90693a9e7370b66f64ddf33ffc5f851b5326a51dd84f836a25c"' :
                                        'id="xs-injectables-links-module-AppModule-ed8e0171fc9e24e95f84ca9db94c4851c646119d3a166e87d4a7925a3a61dcee00266b086866e90693a9e7370b66f64ddf33ffc5f851b5326a51dd84f836a25c"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DishModules.html" data-type="entity-link" >DishModules</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DishModules-8c74e2168169c75eaa08a582d89879ee32ed94c6b3c712eb25e1ff6d36992cebe0fc5d7a255ec408b191d4f049804d185f6d4aa062ee1520c0e10762bab9449f"' : 'data-target="#xs-controllers-links-module-DishModules-8c74e2168169c75eaa08a582d89879ee32ed94c6b3c712eb25e1ff6d36992cebe0fc5d7a255ec408b191d4f049804d185f6d4aa062ee1520c0e10762bab9449f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DishModules-8c74e2168169c75eaa08a582d89879ee32ed94c6b3c712eb25e1ff6d36992cebe0fc5d7a255ec408b191d4f049804d185f6d4aa062ee1520c0e10762bab9449f"' :
                                            'id="xs-controllers-links-module-DishModules-8c74e2168169c75eaa08a582d89879ee32ed94c6b3c712eb25e1ff6d36992cebe0fc5d7a255ec408b191d4f049804d185f6d4aa062ee1520c0e10762bab9449f"' }>
                                            <li class="link">
                                                <a href="controllers/CategeoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategeoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DishModules-8c74e2168169c75eaa08a582d89879ee32ed94c6b3c712eb25e1ff6d36992cebe0fc5d7a255ec408b191d4f049804d185f6d4aa062ee1520c0e10762bab9449f"' : 'data-target="#xs-injectables-links-module-DishModules-8c74e2168169c75eaa08a582d89879ee32ed94c6b3c712eb25e1ff6d36992cebe0fc5d7a255ec408b191d4f049804d185f6d4aa062ee1520c0e10762bab9449f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DishModules-8c74e2168169c75eaa08a582d89879ee32ed94c6b3c712eb25e1ff6d36992cebe0fc5d7a255ec408b191d4f049804d185f6d4aa062ee1520c0e10762bab9449f"' :
                                        'id="xs-injectables-links-module-DishModules-8c74e2168169c75eaa08a582d89879ee32ed94c6b3c712eb25e1ff6d36992cebe0fc5d7a255ec408b191d4f049804d185f6d4aa062ee1520c0e10762bab9449f"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});