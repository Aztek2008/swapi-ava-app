(this['webpackJsonpswapi-ava-app'] =
  this['webpackJsonpswapi-ava-app'] || []).push([
  [0],
  {
    65: function (e, t, c) {},
    66: function (e, t, c) {
      'use strict';
      c.r(t);
      var s = c(1),
        a = c.n(s),
        n = c(29),
        i = c.n(n),
        r = c(3),
        l = c(8),
        o = c(2),
        d = c(0),
        j = function () {
          var e = Object(o.h)().pathname;
          return Object(d.jsx)('nav', {
            style: { marginBottom: '20px' },
            children: Object(d.jsx)('div', {
              className: 'nav-wrapper',
              children: Object(d.jsxs)('div', {
                className: 'col s12',
                style: { padding: '0 20px' },
                children: [
                  Object(d.jsx)(l.b, {
                    to: '/people',
                    className: 'breadcrumb',
                    children: 'Main',
                  }),
                  e.includes('details') &&
                    Object(d.jsx)(l.b, {
                      to: '/details/:id',
                      className: 'breadcrumb',
                      children: 'Details',
                    }),
                ],
              }),
            }),
          });
        },
        u = [
          '19BBY',
          '112BBY',
          '33BBY',
          '41.9BBY',
          '19BBY',
          '52BBY',
          '47BBY',
          '24BBY',
          '57BBY',
        ].sort(),
        p = [
          { title: 'A New Hope', episode_id: 4 },
          { title: 'The Empire Strikes Back', episode_id: 5 },
          { title: 'Return of the Jedi', episode_id: 6 },
          { title: 'The Phantom Menace', episode_id: 1 },
          { title: 'Attack of the Clones', episode_id: 2 },
          { title: 'Revenge of the Sith', episode_id: 3 },
        ],
        h = [
          { name: 'Human', url: 'https://swapi.dev/api/species/1/' },
          { name: 'Droid', url: 'https://swapi.dev/api/species/2/' },
          { name: 'Wookie', url: 'https://swapi.dev/api/species/3/' },
          { name: 'Rodian', url: 'https://swapi.dev/api/species/4/' },
          { name: 'Hutt', url: 'https://swapi.dev/api/species/5/' },
          { name: "Yoda's species", url: 'https://swapi.dev/api/species/6/' },
          { name: 'Trandoshan', url: 'https://swapi.dev/api/species/7/' },
          { name: 'Mon Calamari', url: 'https://swapi.dev/api/species/8/' },
          { name: 'Ewok', url: 'https://swapi.dev/api/species/9/' },
          { name: 'Sullustan', url: 'https://swapi.dev/api/species/10/' },
        ],
        b = Object(s.createContext)(),
        O = c(7),
        m = c.n(O),
        f = c(19),
        x = c(10),
        v = c(9),
        S = c.n(v),
        w = 'SET_CHARACTER_FILMS',
        E = 'SET_CHARACTER_SPECIES',
        y = 'SET_CHARACTER_SPECIES_URLS',
        g = 'SET_CHARACTERS',
        _ = 'SET_CHARACTER',
        B = 'SET_CHARACTER_STARSHIPS',
        C = 'SET_HOMEWORLD',
        N = 'SET_FILM_URLS',
        R = 'SET_STARSHIPS_URLS',
        T = 'SET_HOMEWORLD_URL',
        A = 'SET_FILTER_BY_FILM',
        U = 'SET_FILTER_BY_SPECIES',
        k = 'SET_FILTER_BY_YEAR',
        I = 'SET_CHARACTERS_BY_INPUT',
        Y = function () {
          var e = Object(o.i)().id,
            t = Object(s.useContext)(b),
            c = t.states,
            a = t.dispatchEvent,
            n = e && 'https://swapi.dev/api/people/'.concat(e, '/'),
            i =
              e &&
              'https://starwars-visualguide.com/assets/img//characters/'.concat(
                e,
                '.jpg'
              );
          return (
            Object(s.useEffect)(
              function () {
                S.a
                  .get(n)
                  .then(function (e) {
                    a(_, e.data),
                      a(N, e.data.films),
                      a(R, e.data.starships),
                      a(y, e.data.species),
                      a(T, e.data.homeworld);
                  })
                  .catch(function (e) {
                    throw new Error(e.message);
                  });
              },
              [n]
            ),
            Object(s.useEffect)(
              function () {
                c.filmUrls.map(
                  (function () {
                    var e = Object(x.a)(
                      m.a.mark(function e(t) {
                        return m.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  S.a
                                    .get(t)
                                    .then(function (e) {
                                      return a(w, function (t) {
                                        return (
                                          !t.includes(e.data.title) &&
                                          [].concat(Object(f.a)(t), [
                                            e.data.title,
                                          ])
                                        );
                                      });
                                    })
                                    .catch(function (e) {
                                      throw new Error(e.message);
                                    })
                                );
                              case 2:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              },
              [c.filmUrls]
            ),
            Object(s.useEffect)(
              function () {
                c.characterSpeciesUrls.map(
                  (function () {
                    var e = Object(x.a)(
                      m.a.mark(function e(t) {
                        return m.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  S.a
                                    .get(t)
                                    .then(function (e) {
                                      return a(E, e.data.name);
                                    })
                                    .catch(function (e) {
                                      throw new Error(e.message);
                                    })
                                );
                              case 2:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              },
              [c.characterSpeciesUrls]
            ),
            Object(s.useEffect)(
              function () {
                c.starshipUrls.map(
                  (function () {
                    var e = Object(x.a)(
                      m.a.mark(function e(t) {
                        return m.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  S.a
                                    .get(t)
                                    .then(function (e) {
                                      return a(B, function (t) {
                                        return [].concat(Object(f.a)(t), [
                                          e.data.name,
                                        ]);
                                      });
                                    })
                                    .catch(function (e) {
                                      throw new Error(e.message);
                                    })
                                );
                              case 2:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              },
              [c.starshipUrls]
            ),
            Object(s.useEffect)(
              function () {
                c.homeworldUrl &&
                  S.a
                    .get(c.homeworldUrl)
                    .then(function (e) {
                      return a(C, e.data.name);
                    })
                    .catch(function (e) {
                      throw new Error(e.message);
                    });
              },
              [c.homeworldUrl]
            ),
            Object(d.jsx)('div', {
              children: Object(d.jsx)('div', {
                className: 'row',
                children: Object(d.jsx)('div', {
                  className: 'col s10 m12',
                  children: Object(d.jsxs)('div', {
                    className: 'card',
                    children: [
                      Object(d.jsxs)('div', {
                        className: 'card-image',
                        children: [
                          Object(d.jsx)('img', {
                            src: i,
                            alt: c.character.name,
                          }),
                          Object(d.jsx)('span', {
                            className: 'card-title',
                            style: {
                              color: '#b88888',
                              fontWeight: 900,
                              fontSize: '32px',
                            },
                            children: Object(d.jsx)('b', {
                              children: c.character.name,
                            }),
                          }),
                        ],
                      }),
                      Object(d.jsxs)('article', {
                        className: 'card-content',
                        children: [
                          Object(d.jsxs)('div', {
                            className: 'spanStyle',
                            children: [
                              Object(d.jsx)('span', {
                                style: { minWidth: '20%' },
                                children: 'Films:',
                              }),
                              Object(d.jsxs)('span', {
                                children: [
                                  ' ',
                                  c.characterFilms.join(', '),
                                  ' ',
                                ],
                              }),
                            ],
                          }),
                          Object(d.jsxs)('div', {
                            className: 'spanStyle',
                            children: [
                              Object(d.jsx)('span', {
                                style: { width: '20%' },
                                children: 'Species: ',
                              }),
                              Object(d.jsx)('span', {
                                children: c.characterSpecies.name
                                  ? c.characterSpecies.name
                                  : 'Not specified',
                              }),
                            ],
                          }),
                          Object(d.jsxs)('div', {
                            className: 'spanStyle',
                            children: [
                              Object(d.jsx)('span', {
                                style: { minWidth: '20%' },
                                children: 'Spaceships: ',
                              }),
                              Object(d.jsx)('span', {
                                children:
                                  c.starships.length > 0
                                    ? c.starships.join(', ')
                                    : 'Not specified',
                              }),
                            ],
                          }),
                          Object(d.jsxs)('div', {
                            className: 'spanStyle',
                            children: [
                              Object(d.jsx)('span', {
                                style: { minWidth: '20%' },
                                children: 'Homeworld: ',
                              }),
                              Object(d.jsxs)('span', {
                                children: [' ', c.homeworld],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        },
        F = function () {
          return Object(d.jsx)('div', { children: Object(d.jsx)(Y, {}) });
        },
        H = (function () {
          var e = Object(x.a)(
            m.a.mark(function e(t) {
              return m.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), S.a.get('http://swapi.dev/api/'.concat(t))
                      );
                    case 2:
                      return e.abrupt('return', e.sent);
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        L = function (e) {
          var t = e.character,
            c = e.id,
            s = Object(o.g)();
          return Object(d.jsx)(l.b, {
            to: '/details/'.concat(c),
            className: 'collection-item',
            onClick: function () {
              return s.push('/details/'.concat(c));
            },
            children: t.name,
          });
        },
        M = function () {
          var e = Object(s.useContext)(b),
            t = e.states,
            c = e.dispatchEvent;
          Object(s.useEffect)(function () {
            H('people')
              .then(function (e) {
                c(g, e.data.results);
              })
              .catch(function (e) {
                throw new Error(e.message);
              });
          }, []);
          t.characters.filter(function (e) {
            return (
              Object.values(e).includes(t.filterByFilm) &&
              Object.values(e).includes(t.speciesUrl) &&
              Object.values(e).includes(t.filterByYear)
            );
          });
          var a = t.filterCharactersByInput.length
            ? t.filterCharactersByInput
            : t.characters;
          return Object(d.jsx)('div', {
            className: 'collection',
            children:
              null === a || void 0 === a
                ? void 0
                : a.map(function (e, t) {
                    return Object(d.jsx)(L, { character: e, id: t + 1 }, t);
                  }),
          });
        },
        P = function () {
          return Object(d.jsx)('div', {
            style: {
              background:
                'url(https://upload.wikimedia.org/wikipedia/commons/2/20/Polyphemus_planet.jpg)',
              height: '100vh',
              backgroundSize: 'cover',
            },
          });
        },
        W = function () {
          return Object(d.jsxs)('div', {
            children: [
              Object(d.jsx)('label', { children: 'Choose filter option' }),
              Object(d.jsx)('div', {
                className: 'switch',
                children: Object(d.jsxs)('label', {
                  children: [
                    'AND',
                    Object(d.jsx)('input', { type: 'checkbox' }),
                    Object(d.jsx)('span', { className: 'lever' }),
                    'OR',
                  ],
                }),
              }),
            ],
          });
        },
        D = function () {
          var e = Object(s.useContext)(b),
            t = e.states,
            c = e.dispatchEvent;
          return Object(d.jsx)('div', {
            className: 'row',
            children: Object(d.jsx)('form', {
              className: 'col s10',
              onChange: function (e) {
                var s = t.characters.filter(function (t) {
                  return t.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase());
                });
                c(I, s);
              },
              children: Object(d.jsx)('div', {
                className: 'row',
                children: Object(d.jsxs)('div', {
                  className: 'input-field col s12',
                  children: [
                    Object(d.jsx)('i', {
                      className: 'material-icons prefix',
                      children: 'mode_edit',
                    }),
                    Object(d.jsx)('textarea', {
                      id: 'icon_prefix2',
                      className: 'materialize-textarea',
                    }),
                    Object(d.jsx)('label', {
                      htmlFor: 'icon_prefix2',
                      children: 'Serch here...',
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        V = function () {
          var e = Object(s.useContext)(b),
            t = e.states,
            c = e.dispatchEvent;
          return Object(d.jsxs)('section', {
            style: { display: 'flex', marginBottom: '50px' },
            onChange: function (e) {
              var t = e.target.value;
              'movie-select' === e.target.name && c(A, t),
                'species-select' === e.target.name && c(U, t),
                'year-select-min' === e.target.name && c(k, t),
                'year-select-max' === e.target.name && c(k, t);
            },
            children: [
              Object(d.jsxs)('div', {
                className: 'input-field col s12',
                id: 'selectDiv',
                children: [
                  Object(d.jsxs)('select', {
                    name: 'movie-select',
                    id: 'select-movie',
                    children: [
                      Object(d.jsx)('option', {
                        value: '',
                        disabled: !0,
                        defaultValue: !0,
                        children: 'Choose...',
                      }),
                      t.films.map(function (e) {
                        return Object(d.jsx)(
                          'option',
                          { value: e.title, children: e.title },
                          e.episode_id
                        );
                      }),
                    ],
                  }),
                  Object(d.jsx)('label', { children: 'Movie' }),
                ],
              }),
              Object(d.jsxs)('div', {
                className: 'input-field col s12',
                children: [
                  Object(d.jsxs)('select', {
                    name: 'species-select',
                    id: 'select-species',
                    children: [
                      Object(d.jsx)('option', {
                        value: '',
                        disabled: !0,
                        defaultValue: !0,
                        children: 'Choose...',
                      }),
                      t.species.map(function (e) {
                        return Object(d.jsx)(
                          'option',
                          { value: e.name, name: 'species', children: e.name },
                          e.url
                        );
                      }),
                    ],
                  }),
                  Object(d.jsx)('label', { children: 'Species' }),
                ],
              }),
              Object(d.jsxs)('div', {
                className: 'input-field col s10',
                children: [
                  Object(d.jsxs)('select', {
                    name: 'year-select-min',
                    id: 'select-year',
                    children: [
                      Object(d.jsx)('option', {
                        value: '',
                        disabled: !0,
                        defaultValue: !0,
                        children: 'Choose min...',
                      }),
                      t.years.map(function (e, t) {
                        return Object(d.jsx)(
                          'option',
                          { value: e, children: e },
                          t
                        );
                      }),
                    ],
                  }),
                  Object(d.jsx)('label', { children: 'Birth year range' }),
                  Object(d.jsxs)('select', {
                    name: 'year-select-max',
                    id: 'select-year',
                    children: [
                      Object(d.jsx)('option', {
                        value: '',
                        disabled: !0,
                        defaultValue: !0,
                        children: 'Choose max...',
                      }),
                      t.years.map(function (e, t) {
                        return Object(d.jsx)(
                          'option',
                          { value: e, children: e },
                          t
                        );
                      }),
                    ],
                  }),
                  Object(d.jsx)('label', { children: 'Birth year range' }),
                ],
              }),
            ],
          });
        },
        z = function () {
          return (
            Object(s.useEffect)(function () {
              window.M.AutoInit();
            }, []),
            Object(d.jsxs)(d.Fragment, {
              children: [
                Object(d.jsx)(V, {}),
                Object(d.jsxs)('div', {
                  style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: 'auto',
                  },
                  children: [Object(d.jsx)(W, {}), Object(d.jsx)(D, {})],
                }),
              ],
            })
          );
        },
        J = function () {
          return Object(d.jsxs)('div', {
            className: 'row',
            children: [
              Object(d.jsx)('div', {
                className: 'col s12 m4 l3',
                children: Object(d.jsx)(P, {}),
              }),
              Object(d.jsxs)('div', {
                className: 'col s12 m8 l9',
                children: [Object(d.jsx)(z, {}), Object(d.jsx)(M, {})],
              }),
            ],
          });
        },
        q =
          (c(64),
          function () {
            var e = Object(d.jsxs)(o.d, {
                children: [
                  Object(d.jsx)(o.b, {
                    path: '/people',
                    exact: !0,
                    children: Object(d.jsx)(J, {}),
                  }),
                  Object(d.jsx)(o.b, {
                    path: '/details/:id',
                    exact: !0,
                    children: Object(d.jsx)(F, {}),
                  }),
                  Object(d.jsx)(o.a, { to: '/people' }),
                ],
              }),
              t = Object(s.useState)([]),
              c = Object(r.a)(t, 2),
              a = c[0],
              n = c[1],
              i = Object(s.useState)({}),
              O = Object(r.a)(i, 2),
              m = O[0],
              f = O[1],
              x = Object(s.useState)([]),
              v = Object(r.a)(x, 2),
              S = v[0],
              Y = v[1],
              H = Object(s.useState)([]),
              L = Object(r.a)(H, 2),
              M = L[0],
              P = L[1],
              W = Object(s.useState)([]),
              D = Object(r.a)(W, 2),
              V = D[0],
              z = D[1],
              q = Object(s.useState)(''),
              G = Object(r.a)(q, 2),
              K = G[0],
              Q = G[1],
              X = Object(s.useState)([]),
              Z = Object(r.a)(X, 2),
              $ = Z[0],
              ee = Z[1],
              te = Object(s.useState)([]),
              ce = Object(r.a)(te, 2),
              se = ce[0],
              ae = ce[1],
              ne = Object(s.useState)(''),
              ie = Object(r.a)(ne, 2),
              re = ie[0],
              le = ie[1],
              oe = Object(s.useState)([]),
              de = Object(r.a)(oe, 2),
              je = de[0],
              ue = de[1],
              pe = Object(s.useState)(''),
              he = Object(r.a)(pe, 2),
              be = he[0],
              Oe = he[1],
              me = Object(s.useState)(''),
              fe = Object(r.a)(me, 2),
              xe = fe[0],
              ve = fe[1],
              Se = Object(s.useState)(''),
              we = Object(r.a)(Se, 2),
              Ee = we[0],
              ye = we[1],
              ge = Object(s.useState)([]),
              _e = Object(r.a)(ge, 2),
              Be = _e[0],
              Ce = _e[1],
              Ne = {
                characters: a,
                character: m,
                characterFilms: S,
                characterSpecies: M,
                characterSpeciesUrls: je,
                species: h,
                films: p,
                years: u,
                starships: V,
                homeworld: K,
                filmUrls: $,
                starshipUrls: se,
                homeworldUrl: re,
                filterByFilm: be,
                speciesUrl: xe,
                filterByYear: Ee,
                filterCharactersByInput: Be,
              };
            return Object(d.jsx)(b.Provider, {
              value: {
                states: Ne,
                dispatchEvent: function (e, t) {
                  switch (e) {
                    case _:
                      return void f(t);
                    case g:
                      return void n(t);
                    case w:
                      return void Y(t);
                    case E:
                      return void P(t);
                    case B:
                      return void z(t);
                    case C:
                      return void Q(t);
                    case y:
                      return void ue(t);
                    case N:
                      return void ee(t);
                    case R:
                      return void ae(t);
                    case T:
                      return void le(t);
                    case A:
                      return (
                        Oe(t),
                        console.log('filterByFilm: ', be),
                        void console.log('filterByFilm payload: ', t)
                      );
                    case U:
                      return void ve(t);
                    case k:
                      return void ye(t);
                    case I:
                      return void Ce(t);
                    default:
                      return;
                  }
                },
              },
              children: Object(d.jsx)(l.a, {
                children: Object(d.jsxs)('div', {
                  className: 'container',
                  children: [Object(d.jsx)(j, {}), e],
                }),
              }),
            });
          });
      c(65);
      i.a.render(
        Object(d.jsx)(a.a.StrictMode, { children: Object(d.jsx)(q, {}) }),
        document.getElementById('root')
      );
    },
  },
  [[66, 1, 2]],
]);
//# sourceMappingURL=main.e7f91558.chunk.js.map
