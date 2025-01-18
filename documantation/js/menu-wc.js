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
                    <a href="index.html" data-type="index-link">sms documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-64085e97a5c97a9a71a94db94902eee20491dfb665e521c9958399307a822a5844cc95f88e6c9808ff760fa0f12b11ef3f83ba66e59d8cb643d0decd7b86758b"' : 'data-bs-target="#xs-controllers-links-module-AppModule-64085e97a5c97a9a71a94db94902eee20491dfb665e521c9958399307a822a5844cc95f88e6c9808ff760fa0f12b11ef3f83ba66e59d8cb643d0decd7b86758b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-64085e97a5c97a9a71a94db94902eee20491dfb665e521c9958399307a822a5844cc95f88e6c9808ff760fa0f12b11ef3f83ba66e59d8cb643d0decd7b86758b"' :
                                            'id="xs-controllers-links-module-AppModule-64085e97a5c97a9a71a94db94902eee20491dfb665e521c9958399307a822a5844cc95f88e6c9808ff760fa0f12b11ef3f83ba66e59d8cb643d0decd7b86758b"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-64085e97a5c97a9a71a94db94902eee20491dfb665e521c9958399307a822a5844cc95f88e6c9808ff760fa0f12b11ef3f83ba66e59d8cb643d0decd7b86758b"' : 'data-bs-target="#xs-injectables-links-module-AppModule-64085e97a5c97a9a71a94db94902eee20491dfb665e521c9958399307a822a5844cc95f88e6c9808ff760fa0f12b11ef3f83ba66e59d8cb643d0decd7b86758b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-64085e97a5c97a9a71a94db94902eee20491dfb665e521c9958399307a822a5844cc95f88e6c9808ff760fa0f12b11ef3f83ba66e59d8cb643d0decd7b86758b"' :
                                        'id="xs-injectables-links-module-AppModule-64085e97a5c97a9a71a94db94902eee20491dfb665e521c9958399307a822a5844cc95f88e6c9808ff760fa0f12b11ef3f83ba66e59d8cb643d0decd7b86758b"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-2f9edcd208ab5f6894a433d0d0987a1a68f824c585418c39d378dcb40989c3b9d37a9bcb7f71f4e79f0c3bf227251e1cf962f0642d9a4e0be9687042bc3800af"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-2f9edcd208ab5f6894a433d0d0987a1a68f824c585418c39d378dcb40989c3b9d37a9bcb7f71f4e79f0c3bf227251e1cf962f0642d9a4e0be9687042bc3800af"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-2f9edcd208ab5f6894a433d0d0987a1a68f824c585418c39d378dcb40989c3b9d37a9bcb7f71f4e79f0c3bf227251e1cf962f0642d9a4e0be9687042bc3800af"' :
                                            'id="xs-controllers-links-module-AuthModule-2f9edcd208ab5f6894a433d0d0987a1a68f824c585418c39d378dcb40989c3b9d37a9bcb7f71f4e79f0c3bf227251e1cf962f0642d9a4e0be9687042bc3800af"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-2f9edcd208ab5f6894a433d0d0987a1a68f824c585418c39d378dcb40989c3b9d37a9bcb7f71f4e79f0c3bf227251e1cf962f0642d9a4e0be9687042bc3800af"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-2f9edcd208ab5f6894a433d0d0987a1a68f824c585418c39d378dcb40989c3b9d37a9bcb7f71f4e79f0c3bf227251e1cf962f0642d9a4e0be9687042bc3800af"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-2f9edcd208ab5f6894a433d0d0987a1a68f824c585418c39d378dcb40989c3b9d37a9bcb7f71f4e79f0c3bf227251e1cf962f0642d9a4e0be9687042bc3800af"' :
                                        'id="xs-injectables-links-module-AuthModule-2f9edcd208ab5f6894a433d0d0987a1a68f824c585418c39d378dcb40989c3b9d37a9bcb7f71f4e79f0c3bf227251e1cf962f0642d9a4e0be9687042bc3800af"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-9f450da62e10aa92bbb44cb76f2a930381cd6d59fd96a7ad8b3177e8a41921395432f9fc202bc2a73d3a8804fe805d3881ba8f9eae76f00b85298144841d17b3"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-9f450da62e10aa92bbb44cb76f2a930381cd6d59fd96a7ad8b3177e8a41921395432f9fc202bc2a73d3a8804fe805d3881ba8f9eae76f00b85298144841d17b3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-9f450da62e10aa92bbb44cb76f2a930381cd6d59fd96a7ad8b3177e8a41921395432f9fc202bc2a73d3a8804fe805d3881ba8f9eae76f00b85298144841d17b3"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-9f450da62e10aa92bbb44cb76f2a930381cd6d59fd96a7ad8b3177e8a41921395432f9fc202bc2a73d3a8804fe805d3881ba8f9eae76f00b85298144841d17b3"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-9f450da62e10aa92bbb44cb76f2a930381cd6d59fd96a7ad8b3177e8a41921395432f9fc202bc2a73d3a8804fe805d3881ba8f9eae76f00b85298144841d17b3"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-9f450da62e10aa92bbb44cb76f2a930381cd6d59fd96a7ad8b3177e8a41921395432f9fc202bc2a73d3a8804fe805d3881ba8f9eae76f00b85298144841d17b3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-9f450da62e10aa92bbb44cb76f2a930381cd6d59fd96a7ad8b3177e8a41921395432f9fc202bc2a73d3a8804fe805d3881ba8f9eae76f00b85298144841d17b3"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-9f450da62e10aa92bbb44cb76f2a930381cd6d59fd96a7ad8b3177e8a41921395432f9fc202bc2a73d3a8804fe805d3881ba8f9eae76f00b85298144841d17b3"' }>
                                        <li class="link">
                                            <a href="injectables/metaOptionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >metaOptionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-25a4c08cbdd0ac5eb9842f5d61a71194309e8c9bd2b67dc881d0a4033c75e570bffa10da0f7d6aa96ea16324b3bcdeabbe53a35748b00f1591feda7a32e4a2fe"' : 'data-bs-target="#xs-controllers-links-module-PostModule-25a4c08cbdd0ac5eb9842f5d61a71194309e8c9bd2b67dc881d0a4033c75e570bffa10da0f7d6aa96ea16324b3bcdeabbe53a35748b00f1591feda7a32e4a2fe"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-25a4c08cbdd0ac5eb9842f5d61a71194309e8c9bd2b67dc881d0a4033c75e570bffa10da0f7d6aa96ea16324b3bcdeabbe53a35748b00f1591feda7a32e4a2fe"' :
                                            'id="xs-controllers-links-module-PostModule-25a4c08cbdd0ac5eb9842f5d61a71194309e8c9bd2b67dc881d0a4033c75e570bffa10da0f7d6aa96ea16324b3bcdeabbe53a35748b00f1591feda7a32e4a2fe"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-25a4c08cbdd0ac5eb9842f5d61a71194309e8c9bd2b67dc881d0a4033c75e570bffa10da0f7d6aa96ea16324b3bcdeabbe53a35748b00f1591feda7a32e4a2fe"' : 'data-bs-target="#xs-injectables-links-module-PostModule-25a4c08cbdd0ac5eb9842f5d61a71194309e8c9bd2b67dc881d0a4033c75e570bffa10da0f7d6aa96ea16324b3bcdeabbe53a35748b00f1591feda7a32e4a2fe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-25a4c08cbdd0ac5eb9842f5d61a71194309e8c9bd2b67dc881d0a4033c75e570bffa10da0f7d6aa96ea16324b3bcdeabbe53a35748b00f1591feda7a32e4a2fe"' :
                                        'id="xs-injectables-links-module-PostModule-25a4c08cbdd0ac5eb9842f5d61a71194309e8c9bd2b67dc881d0a4033c75e570bffa10da0f7d6aa96ea16324b3bcdeabbe53a35748b00f1591feda7a32e4a2fe"' }>
                                        <li class="link">
                                            <a href="injectables/PostServices.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostServices</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-adb602ff7372ff06b20b48e90fd7b27d11c589481e63501aab49fd5928a71957128ba768eef34c58effcc289c22db8815157627dab6ba0c8500246a423258448"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-adb602ff7372ff06b20b48e90fd7b27d11c589481e63501aab49fd5928a71957128ba768eef34c58effcc289c22db8815157627dab6ba0c8500246a423258448"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-adb602ff7372ff06b20b48e90fd7b27d11c589481e63501aab49fd5928a71957128ba768eef34c58effcc289c22db8815157627dab6ba0c8500246a423258448"' :
                                            'id="xs-controllers-links-module-TagsModule-adb602ff7372ff06b20b48e90fd7b27d11c589481e63501aab49fd5928a71957128ba768eef34c58effcc289c22db8815157627dab6ba0c8500246a423258448"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-436cb2d6fb3dc0ba06afc83f928ae1b08a2a8c7df8a2158a21b2f9ca065116c9046ed9387dfec0d48135927413c5f700d7d77c9de01cd02b6c3b714920792f43"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-436cb2d6fb3dc0ba06afc83f928ae1b08a2a8c7df8a2158a21b2f9ca065116c9046ed9387dfec0d48135927413c5f700d7d77c9de01cd02b6c3b714920792f43"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-436cb2d6fb3dc0ba06afc83f928ae1b08a2a8c7df8a2158a21b2f9ca065116c9046ed9387dfec0d48135927413c5f700d7d77c9de01cd02b6c3b714920792f43"' :
                                            'id="xs-controllers-links-module-UsersModule-436cb2d6fb3dc0ba06afc83f928ae1b08a2a8c7df8a2158a21b2f9ca065116c9046ed9387dfec0d48135927413c5f700d7d77c9de01cd02b6c3b714920792f43"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-436cb2d6fb3dc0ba06afc83f928ae1b08a2a8c7df8a2158a21b2f9ca065116c9046ed9387dfec0d48135927413c5f700d7d77c9de01cd02b6c3b714920792f43"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-436cb2d6fb3dc0ba06afc83f928ae1b08a2a8c7df8a2158a21b2f9ca065116c9046ed9387dfec0d48135927413c5f700d7d77c9de01cd02b6c3b714920792f43"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-436cb2d6fb3dc0ba06afc83f928ae1b08a2a8c7df8a2158a21b2f9ca065116c9046ed9387dfec0d48135927413c5f700d7d77c9de01cd02b6c3b714920792f43"' :
                                        'id="xs-injectables-links-module-UsersModule-436cb2d6fb3dc0ba06afc83f928ae1b08a2a8c7df8a2158a21b2f9ca065116c9046ed9387dfec0d48135927413c5f700d7d77c9de01cd02b6c3b714920792f43"' }>
                                        <li class="link">
                                            <a href="injectables/UserServices.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserServices</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MetaOptionsController.html" data-type="entity-link" >MetaOptionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostController.html" data-type="entity-link" >PostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagsController.html" data-type="entity-link" >TagsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostsDto.html" data-type="entity-link" >CreatePostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostsDto.html" data-type="entity-link" >GetPostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersDto.html" data-type="entity-link" >GetUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MatchPasswordsConstraint.html" data-type="entity-link" >MatchPasswordsConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/patchPostsDto.html" data-type="entity-link" >patchPostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/metaOptionService.html" data-type="entity-link" >metaOptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostServices.html" data-type="entity-link" >PostServices</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserServices.html" data-type="entity-link" >UserServices</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});