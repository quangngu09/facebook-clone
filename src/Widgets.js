import React from 'react'

function Widgets() {
    return (
        <div className="widgets">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.616888576559!2d105.78645171440634!3d20.967894995230417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad283bf36e51%3A0xbb4957d1ac6fd391!2zS2hvYSBLaMOhbSBC4buHbmggQuG7h25oIHZp4buHbiBRdcOibiB5IDEwMw!5e0!3m2!1svi!2s!4v1615538982134!5m2!1svi!2s" 
                width="340"
                height="100%"
                style={{
                    border:"none",
                    overflow:"hidden",
                }}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
            >
            </iframe>
        </div>
    )
}

export default Widgets
