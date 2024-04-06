import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { LoadingButton } from '@mui/lab';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Box,
  Stack,
  Button,
  Accordion,
  Typography,
  OutlinedInput,
  InputAdornment,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';

import { setFetchData } from 'src/redux/common';

import Iconify from 'src/components/iconify';
import TableComponent from 'src/components/table';
import AlertDialog from 'src/components/dialog-confirm';

import LayoutPopup from '../popup';
import FilterDataTable from './filter';

export default function TableLayoutAdmin({
  rows = [],
  total,
  columns = [],
  minHeight = 420,
  title,
  titleModal,
  renderButton,
  accordionTitle,
  setRowSelectionModel = () => {},
  checkboxSelection = true,
  renderFilter,
  conditions,
  setConditions,
  handleSearch,
  renderModal,
  setValueSearch,
  valueSearch,
  handleOpenModal,
  table,
}) {
  const { t } = useTranslation();
  // show popup in store
  const showPopup = useSelector((state) => state.common.isPopup);
  const dispatch = useDispatch();
  // set value change
  const onChangeValue = useCallback(
    (e) => {
      setValueSearch(e.target.value);
    },
    [setValueSearch]
  );
  // clear value
  const handleClear = useCallback(() => {
    setValueSearch('');
    dispatch(setFetchData(true));
  }, [dispatch, setValueSearch]);
  return (
    <>
      {showPopup ? (
        <LayoutPopup title={titleModal}>{renderModal()}</LayoutPopup>
      ) : (
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h4">{title}</Typography>
            {renderButton && (
              <Button
                variant="contained"
                color="success"
                startIcon={<Iconify icon="eva:plus-fill" />}
                onClick={() => handleOpenModal({})}
                size="small"
              >
                {t('button.create')}
              </Button>
            )}
          </Stack>

          <FilterDataTable>
            {renderFilter || (
              <Box sx={{ textAlign: 'right' }}>
                <OutlinedInput
                  value={valueSearch}
                  onChange={onChangeValue}
                  placeholder={t('placeholder.search')}
                  sx={{ marginRight: 2 }}
                  size="small"
                  startAdornment={
                    <InputAdornment position="start">
                      <Iconify
                        icon="eva:search-fill"
                        sx={{ color: 'text.disabled', width: 20, height: 20 }}
                      />
                    </InputAdornment>
                  }
                />
                <LoadingButton
                  //   fullWidth
                  size="small"
                  variant="text"
                  color="inherit"
                  onClick={handleClear}
                  sx={{ marginRight: 1 }}
                >
                  {t('button.clear')}
                </LoadingButton>
                <LoadingButton
                  //   fullWidth
                  size="small"
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleSearch}
                  disabled={valueSearch === ''}
                >
                  {t('button.search')}
                </LoadingButton>
              </Box>
            )}
          </FilterDataTable>
          <Accordion defaultExpanded sx={{ marginTop: '0 !important' }}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel-table"
              id="panel-table"
            >
              <Typography variant="subtitle2">
                {accordionTitle || t('accordion.title_table')}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableComponent
                rows={rows}
                total={total}
                columns={columns}
                minHeight={minHeight}
                setRowSelectionModel={setRowSelectionModel}
                checkboxSelection={checkboxSelection}
                setConditions={setConditions}
                conditions={conditions}
                // fixedRight={fixedRight}
                // fixedLeft={fixedLeft}
                table={table}
              />
            </AccordionDetails>
          </Accordion>
        </Box>
      )}
      <AlertDialog />
    </>
  );
}

TableLayoutAdmin.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  minHeight: PropTypes.number,
  title: PropTypes.string,
  titleModal: PropTypes.string,
  renderButton: PropTypes.bool,
  accordionTitle: PropTypes.string,
  setRowSelectionModel: PropTypes.func,
  checkboxSelection: PropTypes.bool,
  renderFilter: PropTypes.node,
  handleOpenModal: PropTypes.func,
  setConditions: PropTypes.func,
  conditions: PropTypes.object,
  handleSearch: PropTypes.func,
  renderModal: PropTypes.any,
  setValueSearch: PropTypes.func,
  valueSearch: PropTypes.string,
  total: PropTypes.number,
  // fixedRight: PropTypes.array,
  // fixedLeft: PropTypes.array,
  table: PropTypes.object,
};
