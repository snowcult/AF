import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Card from 'aifriends/src/Card.jsx';

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Card">
                <Card/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
