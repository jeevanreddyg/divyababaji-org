import React from "react"
import Container from "./container"
import Image from "next/image"

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";
import heroImg from "../public/img/hero.png";
import babajiImg  from "../public/img/babaji.png"
import bhogarImg from "../public/img/bhogar.png"
import ammagaruImg from "../public/img/aathmanandamayi-mataji.png"

export default function Gurus() {

    const gurus_details = [
        {
            name: 'Pujyaguru Mahavatar Babaji',
            image: babajiImg
        },
        {
            name: 'Pujyaguru Bhoga Siddar',
            image: bhogarImg
        },
        {
            name: 'Pujyasri Aathmanandamayi',
            image: ammagaruImg
        }
    ]

    return (
        <>
            <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
                {
                gurus_details.map(item => (
                    <Guru image={item.image} name={item.name}/>
                ))
                }
            </Container>
        </>
    )
}

export function Guru(props) {
    // const { image } = props
    console.log(props)
    return (
        <div className="items-center justify-center lg:order-1">
            <Image
                src={props.image.src}
                width="521"
                height="300"
                alt="Benefits"
                className={"object-cover"}
                placeholder="blur"
                blurDataURL={props.image.blurDataURL}
            />
            <h4 className="ml-10 pl-5 pt-5 items-center  text-xl font-medium text-gray-800 dark:text-gray-200">
                {props.name}
            </h4>
        </div>
    )
}