import React from "react";
import { statusDetails, languageDetails } from "../../data";

const Details = () => {
    return ( 
        <div className="page-container no-shadow">
            <h1 className="experience-title"><u>If you got this far...</u></h1>

            <div className="details">
                <div className="deet random">
                    <h4><u>Status:</u></h4>
                    {
                        statusDetails.map((item, index) => {
                            return (
                                <div key={index} className="row">
                                    <p>{ item.item } :</p>
                                    <p>{ item.value }</p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="deet language">
                    <h4><u>Languages Known:</u></h4>
                    {
                        languageDetails.map((item, index) => {
                            return (
                                <div key={index} className="row">
                                    <p>{ item.item } :</p>
                                    <p>{ item.value }</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Details;