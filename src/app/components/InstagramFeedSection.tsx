import { useEffect, useRef } from "react"

const BEHOLD_FEED_ID = "A0kwNTKUAJENXFiJgHlU"
const INSTAGRAM_URL = "https://www.instagram.com/selkepestcontrol"

export function InstagramFeedSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!BEHOLD_FEED_ID || !sectionRef.current) return

    const section = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return

        if (!document.querySelector("script[data-behold-widget]")) {
          const script = document.createElement("script")
          script.src = "https://w.behold.so/widget.js"
          script.type = "module"
          script.async = true
          script.dataset.beholdWidget = "true"
          document.head.appendChild(script)
        }

        observer.disconnect()
      },
      { rootMargin: "500px" },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 text-slate-950"
      aria-label="Recent work on Instagram"
    >
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl md:text-4xl">Recent Work</h2>
          <p className="mb-5 text-gray-500">
            Follow us on Instagram — real jobs across the Charlotte Metro
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
            style={{
              background:
                "linear-gradient(135deg, #F58529, #DD2A7B 50%, #8134AF)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="white"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @selkepestcontrol
          </a>
        </div>

        {BEHOLD_FEED_ID ? (
          <div className="mx-auto max-w-4xl">
            {/* @ts-ignore -- Behold registers this custom element when its widget script loads. */}
            <behold-widget feed-id={BEHOLD_FEED_ID} />
          </div>
        ) : (
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {[...Array(6)].map((_, index) => (
                <a
                  key={index}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex aspect-square items-center justify-center overflow-hidden rounded-lg transition-opacity hover:opacity-80"
                  style={{
                    background:
                      "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
                  }}
                  aria-label="View on Instagram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    opacity="0.15"
                    className="size-10"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
