import React from "react";

const Footer = (props) => {
    return (
     <div class="container-fluid">
        <footer class="py-3 my-4 ms-1 me-1">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{props.home}</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{props.features}</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{props.pricing}</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{props.faqs}</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">{props.about}</a></li>
        </ul>
            <p class="text-center text-muted">&copy; {props.company}</p>
        </footer>
    </div>
    );
}

export default Footer