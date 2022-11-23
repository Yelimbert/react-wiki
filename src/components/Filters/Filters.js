import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = () => {
    return (
        <div className="col-3">
            <div className="text-center fw-bold fs-4 mb-3">Filters</div>
            <div style={{cursor: "pointer"}} className="text-center text-primary text-decoration-underline">Clear filters</div>

            <div className="accordion" id="accordionExample">
							<Status />
							<Gender />
							<Species />
						</div>
        </div>
    );
}

export default Filters;