export default {
  bind(el, binding, vnode) {
    let current = 0;

    el.addEventListener("click", function () {
      let incremento = binding.value || 90;
      let efeito;

      if (!binding.arg || binding.arg == "rotate") {
        if (binding.modifiers.reverse) {
          current -= incremento;
        } else {
          current += incremento;
        }
        efeito = `rotate(${current}deg)`;
      }
      el.style.transform = efeito;
      if (binding.modifiers.animate) el.style.transition = "transform 0.5s";
    });
  },
};
