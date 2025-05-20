{/*gallary section created by me*/}
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Gallery() { 
    return (
        <>
        <Navigation />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {[1, 2, 3, 4, 5, 3].map((image) => (
                <div key={image} className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src={`/images/${image}.jpg`}
                        alt={`Gallery Image ${image}`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        
                    />
                    
                </div>
            ))}
        </div>
        </>
    );
}