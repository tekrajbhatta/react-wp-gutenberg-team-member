import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    MediaUpload,
    MediaUploadCheck,
    RichText
} from '@wordpress/block-editor';
import { Button, TextControl } from '@wordpress/components';
import ArrowIcon from './arrow_right.svg';
import ArrowIconGreen from './arrow_right_green.svg';

function Edit({ attributes, setAttributes }) {
    // const { imageUrl, imageId, imageAlt, name, designation, description, linkedinLink = '#' } = attributes;
    const { 
        imageUrl = '', 
        imageId = null, 
        imageAlt = '', 
        name = '', 
        designation = '', 
        description = '', 
        linkedinLink = '' 
    } = attributes;
    const blockProps = useBlockProps({
        className: 'team-member'
    });

    const onSelectImage = (media) => {
        setAttributes({
            imageUrl: media.url,
            imageId: media.id,
            imageAlt: media.alt || ''
        });
    };

    const removeImage = () => {
        setAttributes({
            imageUrl: '',
            imageId: null,
            imageAlt: ''
        });
    };

    return (
        <div {...blockProps}>
            <div className="team-member-content">
                <div className="team-member-image-wrapper">
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectImage}
                            allowedTypes={['image']}
                            value={imageId}
                            render={({ open }) => (
                                <>
                                    {!imageUrl ? (
                                        <Button
                                            onClick={open}
                                            className="team-member-upload-button"
                                            variant="secondary"
                                        >
                                            <span>{__('Upload Image', 'vdplug')}</span>
                                        </Button>
                                    ) : (
                                        <div className="team-member-image-container">
                                            <img
                                                src={imageUrl}
                                                alt={imageAlt}
                                                className="team-member-image"
                                            />
                                            <img
                                                src={ArrowIcon}
                                                alt="Arrow Icon"
                                                className="team-member-arrow"
                                            />
                                            <img
                                                src={ArrowIconGreen}
                                                alt="Arrow Icon Green"
                                                className="team-member-arrow-green"
                                            />
                                            <div className="team-member-image-buttons">
                                                <Button
                                                    onClick={open}
                                                    variant="primary"
                                                >
                                                    {__('Replace', 'vdplug')}
                                                </Button>
                                                <Button
                                                    onClick={removeImage}
                                                    variant="primary"
                                                    isDestructive
                                                >
                                                    {__('Remove', 'vdplug')}
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        />
                    </MediaUploadCheck>
                    <div className="team-member-info">
                        <RichText
                            tagName="h3"
                            className="team-member-name"
                            value={name}
                            onChange={(name) => setAttributes({ name })}
                            placeholder={__('Enter name...', 'vdplug')}
                        />
                        <RichText
                            tagName="p"
                            className="team-member-designation"
                            value={designation}
                            onChange={(designation) => setAttributes({ designation })}
                            placeholder={__('Enter designation...', 'vdplug')}
                        />
                        <TextControl
                            value={linkedinLink}
                            onChange={(linkedinLink) => setAttributes({ linkedinLink })}
                            placeholder={__('Enter LinkedIn...', 'vdplug')}
                        />
                        <RichText
                            tagName="p"
                            className="team-member-description"
                            value={description}
                            onChange={(description) => setAttributes({ description })}
                            placeholder={__('Enter description...', 'vdplug')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;
