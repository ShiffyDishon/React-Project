import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Info({ user }) {

    return (
        <div className="userInfo">

            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <div class="well well-sm">
                            <div class="row">
                                <div class="col-sm-6 col-md-4">
                                    <img src="http://placehold.it/850x2200" alt="" class="img-rounded img-responsive" />
                                </div>
                                <div class="col-sm-6 col-md-8">
                                    <h4>{user.name}</h4>
                                    <p><i class="glyphicon glyphicon-map-marker"></i>
                                        <p>{user.address.street}</p>
                                        <p>{user.address.suite}</p>
                                        <p>{user.address.city}</p>
                                        <p>{user.address.geo.lat}</p>
                                        <p>{user.address.geo.lng}</p>
                                    </p>
                                    <p>
                                        <i class="glyphicon glyphicon-envelope"></i>  { user.email}<br /><br />
                                        <i class="bi bi-telephone-fill"></i>  { user.phone}<br /><br />
                                        <i class="glyphicon glyphicon-globe"></i><a href={`http://www.${user.website}.com`}>  www.{user.website}.com</a><br /><br />

                                        <i class="bi bi-building"></i>{user.company.name}<br />
                                        <p>{user.company.catchPhrase}</p>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}