'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    // ArrowPathIcon,
    Bars3Icon,
    XMarkIcon,
    UserGroupIcon,
    AtSymbolIcon,
    BuildingOfficeIcon,
    MapIcon,
    ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, MegaphoneIcon } from '@heroicons/react/20/solid'
import PopoverMenu from './popover';

const profile = [
    { name: 'Tentang Kami', description: 'Get a better understanding of your traffic', href: '#', icon: AtSymbolIcon },
    { name: 'Ketenagaan', description: 'Speak directly to your customers', href: '#', icon: UserGroupIcon },
    { name: 'Sarana & Prasarana', description: 'Your customers’ data will be safe and secure', href: '#', icon: BuildingOfficeIcon },
    { name: 'Peta Wilayah', description: 'Connect with third-party tools', href: '#', icon: MapIcon },
]

const services = [
    { name: 'Pelayanan Klaster', description: 'Manajemen, Ibu & Anak, Dewasa & Lansia', href: '#', icon: UserGroupIcon },
    { name: 'Cek Kesehatan Gratis (CKG)', description: 'Gawat Darurat, Laboratorium, Gigi, dll', href: '#', icon: ClipboardDocumentCheckIcon },
    { name: 'Layanan BPJS & UHC', description: 'Get a better understanding of your traffic', href: '#', icon: UserGroupIcon },
]
const callsToAction = [
    { name: 'Hubungi Kami', href: 'tel:+62313981865', icon: PhoneIcon },
    { name: 'Pengaduan Layanan', href: '#', icon: MegaphoneIcon },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image
                            alt="Puskesmas Alun Alun"
                            src="/logo-text.png"
                            className="h-10 w-auto"
                            width={400}
                            height={400}
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Link href="/" className="text-sm/6 font-semibold text-gray-900">
                        Beranda
                    </Link>

                    <PopoverMenu title="Profile" items={profile} callsToAction={callsToAction} />
                    <PopoverMenu title="Layanan" items={services} callsToAction={callsToAction} />

                    <Link href="/blogs" className="text-sm/6 font-semibold text-gray-900">
                        Blog
                    </Link>

                    <Link href="/documents" className="text-sm/6 font-semibold text-gray-900">
                        Dokumen
                    </Link>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="#" className="text-sm/6 font-semibold text-gray-900 flex gap-2 items-center">
                        <PhoneIcon height={16} />
                        Hubungi Kami
                    </Link>
                </div>
            </nav>
            {/* Mobile Menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                alt=""
                                src="/logo-text.png"
                                className="h-10 w-auto"
                                width={400}
                                height={400}
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Product
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...services, ...callsToAction].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Marketplace
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
