(function () {
    'use strict';

    var STORAGE_KEY = 'portfolio-language';
    var supportedPages = new Set([
        'index.html',
        'yogibo.html',
        'robodachi.html',
        'futureverse.html',
        'other-works.html'
    ]);

    function currentPage() {
        var page = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';
        return supportedPages.has(page) ? page : null;
    }

    function isJapanesePage() {
        return /\/ja\//.test(window.location.pathname.replace(/\\/g, '/'));
    }

    function storedLanguage() {
        try {
            return window.localStorage.getItem(STORAGE_KEY);
        } catch (error) {
            return null;
        }
    }

    function rememberLanguage(language) {
        try {
            window.localStorage.setItem(STORAGE_KEY, language);
        } catch (error) {
            // The links still work when storage is unavailable.
        }
    }

    function counterpartUrl(language) {
        var page = currentPage();
        if (!page) return null;

        var target = language === 'ja'
            ? new URL('ja/' + page, window.location.href)
            : new URL('../' + page, window.location.href);

        target.search = window.location.search;
        target.hash = window.location.hash;
        return target.href;
    }

    var preference = storedLanguage();
    var pageIsJapanese = isJapanesePage();

    if (preference === 'ja' && !pageIsJapanese) {
        var japaneseUrl = counterpartUrl('ja');
        if (japaneseUrl) window.location.replace(japaneseUrl);
    } else if (preference === 'en' && pageIsJapanese) {
        var englishUrl = counterpartUrl('en');
        if (englishUrl) window.location.replace(englishUrl);
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('[data-language-switch]').forEach(function (link) {
            link.addEventListener('click', function () {
                rememberLanguage(link.getAttribute('data-language-switch'));
            });
        });
    });
}());
