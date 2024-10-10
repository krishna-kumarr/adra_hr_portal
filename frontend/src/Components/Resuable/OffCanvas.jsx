import React from 'react'

const OffCanvas = ({
    dataFrom,
    offcanvasPosition,
    offcanvasHeader,
    canvasHeader,
    canvasBody,
    dataBsScroll
}) => {

    return (
        <div class={"offcanvas" + offcanvasPosition } data-bs-scroll={dataBsScroll} tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            {
                offcanvasHeader ?
                    <div class="offcanvas-header">
                        {offcanvasHeader}
                        <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    : null
            }

            <div class="offcanvas-body">
                {canvasBody}
                <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </div>
                <div class="dropdown mt-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OffCanvas