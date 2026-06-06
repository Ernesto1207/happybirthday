(function () {
  window.Components = window.Components || {};
  window.Components["birthday-countdown"] = {
    overlay: false,

    render(container, section, config) {
      const div = document.createElement("div");
      div.className = "section section-birthday-countdown";

      div.innerHTML = `
        <div class="countdown-timer-box main-blocker">
          <h2 class="timer-main-title">${section.title || "Falta muy poco"}</h2>
          <div class="timer-values">
            <div class="time-block"><span id="cd-days">00</span><label>Días</label></div>
            <div class="time-block"><span id="cd-hours">00</span><label>Horas</label></div>
            <div class="time-block"><span id="cd-mins">00</span><label>Mins</label></div>
            <div class="time-block"><span id="cd-secs">00</span><label>Segs</label></div>
          </div>
        </div>
      `;
      container.appendChild(div);
      return div;
    },

    animate(tl, el, config) {
      const targetDate = new Date("2026-06-06T00:00:00").getTime();
      const nowCheck = new Date().getTime();

      // CORRECCIÓN: Si el tiempo ya expiró antes de empezar la animación, no mostramos el contador
      if (targetDate - nowCheck <= 0) {
        tl.add(() => {
          el.remove(); // Elimina el contenedor del DOM inmediatamente
          const isDark = (config.defaultMode || "dark") === "dark";
          const audio = document.querySelector(".song");

          Swal.fire({
            title: "¿Reproducir música de fondo?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: config.colors.accent || "#3085d6",
            cancelButtonColor: "#888",
            confirmButtonText: "Sí",
            cancelButtonText: "No",
            background: isDark ? "#1e293b" : "#ffffff",
            color: isDark ? "#f1f5f9" : "#1e293b",
          }).then((result) => {
            if (result.isConfirmed && audio) {
              audio.play().catch(() => {});
            }
            tl.play(); // Ejecuta el saludo directamente
          });
        });
        return;
      }

      // Si todavía falta tiempo, el contador aparece normalmente
      tl.fromTo(
        el,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
      );

      tl.add(() => {
        function updateTimer() {
          const now = new Date().getTime();
          const difference = targetDate - now;

          // Cuando el contador llega a cero de forma natural estando en la página
          if (difference <= 0) {
            const isDark = (config.defaultMode || "dark") === "dark";
            const audio = document.querySelector(".song");

            Swal.fire({
              title: "¿Reproducir música de fondo?",
              icon: "question",
              showCancelButton: true,
              confirmButtonColor: config.colors.accent || "#3085d6",
              cancelButtonColor: "#888",
              confirmButtonText: "Sí",
              cancelButtonText: "No",
              background: isDark ? "#1e293b" : "#ffffff",
              color: isDark ? "#f1f5f9" : "#1e293b",
            }).then((result) => {
              if (result.isConfirmed && audio) {
                audio.play().catch(() => {});
              }

              gsap.to(el, {
                duration: 0.6,
                opacity: 0,
                y: -30,
                onComplete: () => {
                  el.remove();
                  tl.play();
                },
              });
            });

            return;
          }

          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          );
          const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60),
          );
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          const dEl = document.getElementById("cd-days");
          const hEl = document.getElementById("cd-hours");
          const mEl = document.getElementById("cd-mins");
          const sEl = document.getElementById("cd-secs");

          if (dEl && hEl && mEl && sEl) {
            dEl.textContent = String(days).padStart(2, "0");
            hEl.textContent = String(hours).padStart(2, "0");
            mEl.textContent = String(minutes).padStart(2, "0");
            sEl.textContent = String(seconds).padStart(2, "0");

            gsap.delayedCall(1, updateTimer);
          }
        }

        tl.pause();
        updateTimer();
      });
    },
  };
})();
