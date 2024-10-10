import { Terminal } from "./Terminal";
import { Check, MoveRight } from 'lucide-react';
import NextLink from "next/link";
import { ExternalLink } from '@/components'
import { Button } from "@nextui-org/react";
import { siteConfig } from '@/config/site';

/**
 * The Hero component for the homepage.
 *
 * This component displays a hero section on the homepage that includes the title, description, and a list of features.
 *
 * The component takes no props.
 *
 * @returns The Hero component.
 */
export const HomeHero = () => {
  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="ellipsis top-0 start-auto">
        <div className="ellipsis-item"></div>
      </div>
      <div className="py-4 lg:py-5">
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-2">
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl font-bold px-4 text-center lg:px-0 lg:text-start lg:text-6xl mb-8">{siteConfig.title}</h1>
            <p className="lg:text-start text-default-500 text-lg px-4 text-center mb-12">{siteConfig.description}</p>
            <div className="flex lg:justify-start justify-center mb-12">
              <ul>
                {
                  siteConfig.homeHero.extra.map((item, idx) => {
                    return (
                      <li key={idx} className="flex items-start mb-3">
                        <Check size={20} color="#0ea5e9"  className="me-2"/>
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="flex justify-center items-center gap-4 flex-col lg:justify-start sm:flex-row sm:gap-6">
              {
                siteConfig.homeHero.actions.map((item, idx) => {
                  return (
                    <NextLink key={idx} href={item.link}>
                      <Button
                        color="primary"
                      >
                        {item.text}
                      </Button>
                    </NextLink>
                  )
                })
              }
              <ExternalLink href={siteConfig.github} className="flex items-center gap-2 text-foreground hover:text-foreground-500">Open on GitHub <MoveRight size={20} /></ExternalLink>
            </div>
          </div>
          <div className="lg:col-span-1">
            <Terminal data={siteConfig.homeHero.terminal} />
          </div>
        </div>
      </div>
      <div className="relative lg:pb-14 sm:pb-8 pb-6">
        <div className="ellipsis top-40 left-0">
          <div className="ellipsis-item"></div>
        </div>
        <h2 className="text-4xl font-bold mb-8 mt-10">Features</h2>
        <section className="grid gap-3 lg:grid-cols-3 sm:grid-cols-2">
          {
            siteConfig.homeHero.features.map((item, idx) => {
              return (
                <div key={idx} className="w-full p-8 relative border border-default-100/10 rounded-2xl bg-default-100/10 backdrop-blur-xl">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="text-sm text-default-400">{item.desc}</p>
                </div>
              )
            })
          }

        </section>
      </div>
    </div>
  );
};