import {heroSections} from '../data/heroData';
import Hero from '../components/Hero/Hero'

export default function Demo() {
  return (
    <div>
      <h1>Hero Component Demo</h1>
      <p>Your Hero component should render the CMS data below. Map over the heroSections array and display each hero with different layouts:</p>

      <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', margin: '2rem 0' }}>
        {heroSections.map(section => (
          <div> 
            <Hero 
              key={section.id} 
              src={section.backgroundImage.src} 
              alt={section.backgroundImage.alt} 
              title={section.title} 
              description={section.description} 
              placeTitle={section.layout && section.layout.titlePlacement ? section.layout.titlePlacement : 'center'}
              placeDescription={section.layout && section.layout.descriptionPlacement ? section.layout.descriptionPlacement : 'center'} 
              txtColor={section.theme ? (section.theme == 'light' ? 'white' : (section.theme == 'dark' ? 'black' : section.theme)) : ''}
            />
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
}
