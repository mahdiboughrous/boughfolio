import Link from "next/link";



export const ThanksPage = () => {
    return (
        <div>
        <h1>Thanks for your message!</h1>
        <p>I will get back to you as soon as I can.</p>
        <Link title="Go Back" href="/"/>
        </div>
    );
}