interface HeadProps {
    title: string
    description?: string
};

export const Head = ({title, description = ''}: HeadProps) => {
    document.title = `Fitness commerce | ${title}`;
    document.querySelector('[name=description]')?.setAttribute('content', description);

    return null
};

