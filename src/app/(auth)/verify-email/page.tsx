"use client"

import VerifyEmail from "@/components/VerifyEmail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation"

interface PageProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

const VerifyEmailPage = ({ searchParams }: PageProps) => {
    const token = searchParams.token;
    const toEmail = searchParams.to;
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        router.push('/sign-in');
    };

    return (
        <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                {token && typeof token === "string" ? (
                    <div className="grid gap-6">
                        <VerifyEmail token={token} />
                    </div>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-1">
                        <div className="relative mb-4 h-360 w-360 text-muted-foreground">
                            <Image src='/sent-email.png' alt='email sent image' width={180} height={180} />
                        </div>
                        <h3 className="font-semibold text-2xl">
                            Check your email
                        </h3>
                        {toEmail ? <p className="text-muted-foreground text-center">
                            We have sent a verification link to <span className="font-semibold">{toEmail}</span>.
                        </p> : <p className="text-muted-foreground text-center">
                            We have sent a verification code to your email.
                        </p>}

                        <div className="grid gap-6">
                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-2">
                                    <div className="grid gap-1 py-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    <Button type="submit">Sign up</Button>
                                </div>
                            </form>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default VerifyEmailPage;
