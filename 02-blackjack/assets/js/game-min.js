const blackjackModule = (() => {
  "use strict";
  let e = ["C", "D", "H", "S"],
    r = ["A", "J", "Q", "K"],
    t = [],
    l = [],
    d = document.querySelector("#btnNewCard"),
    s = document.querySelector("#btnStop"),
    n = document.querySelector("#btnNewGame"),
    a = document.querySelectorAll("small"),
    c = document.querySelector("#player-cards"),
    i = document.querySelector("#computer-cards"),
    o = (e = 2) => {
      u(), (l = []);
      for (let r = 0; r < e; r++) l.push(0), (a[r].innerText = 0);
      (d.disabled = !1),
        (s.disabled = !1),
        (c.innerHTML = ""),
        (i.innerHTML = "");
    },
    u = () => {
      t = [];
      for (let l = 2; l <= 10; l++)
        e.forEach((e) => {
          t.push(l + e);
        });
      return (
        r.forEach((r) => {
          e.forEach((e) => {
            t.push(r + e);
          });
        }),
        (t = _.shuffle(t))
      );
    },
    $ = () => {
      if (0 === t.length) throw "The deck is empty";
      return t.pop();
    },
    p = (e) => {
      let r = e.substring(0, e.length - 1);
      return isNaN(r) ? ("A" === r ? 11 : 10) : 1 * r;
    },
    b = (e) => {
      let r = document.createElement("img");
      return r.classList.add("my-card"), (r.src = `assets/cards/${e}.png`), r;
    },
    h = (e, r) => ((l[e] = l[e] + p(r)), (a[e].innerText = l[e]), l[e]),
    y = (e, r) => {
      setTimeout(() => {
        e === r
          ? alert("Draw!!!")
          : r > 21
          ? alert("You lose!!!")
          : e > 21
          ? alert("You win!!!")
          : alert("You lose!!!");
      }, 40);
    },
    f = (e) => {
      let r = 0;
      do {
        let t = $();
        (r = h(l.length - 1, t)), i.append(b(t));
      } while (r < e && e <= 21);
      y(r, e);
    },
    m = (e) => {
      e > 21
        ? ((d.disabled = !0), (s.disabled = !0), f(e))
        : 21 === e && ((d.disabled = !0), (s.disabled = !0));
    };
  return (
    d.addEventListener("click", () => {
      let e = $(),
        r = h(0, e);
      c.append(b(e)), m(r);
    }),
    s.addEventListener("click", () => {
      (d.disabled = !0), (s.disabled = !0), f(l[0]);
    }),
    n.addEventListener("click", () => {
      o();
    }),
    { newGame: o }
  );
})();
