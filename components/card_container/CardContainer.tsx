'use client';

import {
    Container,
    Typography,
    CircularProgress,
    Grid
} from '@mui/material';;
import CardComponent, { ICard } from './Card';

export interface CardContainerProps {
    cardsData: ICard[];
    onValue?: (value: string) => void;
    onLoading?: boolean;
    onDelete?: (institutionId: string) => void;
    onEdit?: (data: any) => void;
}

export default function CardContainer({ cardsData, onValue, onLoading, onDelete, onEdit }: CardContainerProps) {
    return (
        <Container disableGutters maxWidth={false} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
                {onLoading ? (
                    <Grid size={12} sx={{ textAlign: 'center', py: 4 }}>
                        <CircularProgress />
                    </Grid>
                ) : cardsData.length > 0 ? (
                    cardsData.map((card, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={card.InstitutionId || index}>
                            <CardComponent properties={card} onDelete={onDelete} onEdit={onEdit} />
                        </Grid>
                    ))
                ) : (
                    <Grid size={12}>
                        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', my: 2 }}>
                            No se encontraron resultados.
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}