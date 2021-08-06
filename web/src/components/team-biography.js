import React from 'react';
import classes from './TeamBios.module.css';

const { aboutContainer, aboutQuickInfoHeader, aboutQuickInfo, aboutQuickInfoCell } = classes;

const TeamBios = (props) => {
    return (
        <section className={aboutContainer}>
            <div>
                <img src="https://via.placeholder.com/150" alt="image" />
                <h3>Christopher De Leon</h3>
                <div className={aboutQuickInfoCell}>
                    <h3 className={aboutQuickInfoHeader}>Roles</h3>
                    <p className={aboutQuickInfo}>Software Engineer</p>
                </div>
                <div className={aboutQuickInfoCell}>
                    <h3 className={aboutQuickInfoHeader}>Companies</h3>
                    <p className={aboutQuickInfo}>Forbes</p>
                </div>
                <div className={aboutQuickInfoCell}>
                    <h3 className={aboutQuickInfoHeader}>Education</h3>
                    <p className={aboutQuickInfo}>NJIT</p>
                </div>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt dui non purus pretium,
                    et euismod urna gravida. Donec vitae ipsum nisl. Phasellus turpis quam, ornare ut quam ac, lacinia
                    accumsan augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse congue metus
                    et aliquam hendrerit. Maecenas vel vestibulum metus, a iaculis turpis. Duis non enim sed mi ornare
                    sodales. Sed sed tristique dui, in maximus mi. Ut interdum tincidunt mauris at luctus. Fusce tempus
                    finibus metus, nec vestibulum ipsum laoreet nec.
                </p>
                <p>
                    In id lorem a erat ullamcorper dignissim sit amet sed nibh. Suspendisse potenti. Integer efficitur nibh
                    vitae lorem varius pharetra a vel nibh. Nam id diam tincidunt nisl tristique lacinia. Mauris at mollis augue.
                    Integer vestibulum magna vel vestibulum cursus. Pellentesque in tincidunt ex. Aenean vitae justo nibh. Mauris
                    commodo lobortis ante eu lacinia. In vehicula ligula nec risus pellentesque maximus. Aenean sit amet hendrerit
                    Etiam id quam eleifend, mattis odio nec, consectetur ante. Sed ultrices lectus eu tortor tristique viverra.
                    Curabitur sit amet efficitur purus. Mauris dictum nibh lectus, sit amet dictum tellus imperdiet quis.
                </p>
            </div>
        </section>
    );
};

export default TeamBios;